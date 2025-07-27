import { useForm, UseFormProps } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { sanitizeText, globalRateLimiter, safeError } from '@/lib/security';
import { toast } from '@/hooks/use-toast';

interface SecureFormOptions<T extends z.ZodType<any, any>> extends UseFormProps {
  schema: T;
  rateLimitKey?: string;
  onSubmit: (data: z.infer<T>) => Promise<void> | void;
}

export function useSecureForm<T extends z.ZodType<any, any>>({
  schema,
  rateLimitKey,
  onSubmit,
  ...formOptions
}: SecureFormOptions<T>) {
  const form = useForm({
    resolver: zodResolver(schema),
    ...formOptions,
  });

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      // Rate limiting check
      if (rateLimitKey && !globalRateLimiter.isAllowed(rateLimitKey)) {
        toast({
          title: "Too many attempts",
          description: "Please wait before trying again.",
          variant: "destructive",
        });
        return;
      }

      // Sanitize text fields
      const sanitizedData = Object.entries(data).reduce((acc, [key, value]) => {
        if (typeof value === 'string') {
          acc[key] = sanitizeText(value);
        } else {
          acc[key] = value;
        }
        return acc;
      }, {} as any);

      // Validate sanitized data
      const validatedData = schema.parse(sanitizedData);
      
      await onSubmit(validatedData);
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission failed",
        description: safeError(error),
        variant: "destructive",
      });
    }
  });

  return {
    ...form,
    handleSubmit,
  };
}