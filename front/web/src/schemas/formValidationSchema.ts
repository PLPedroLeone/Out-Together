import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    workType: z.enum(["freelance", "employed", "both"], {
        errorMap: () => ({ message: "Selecciona una opción"}),
    }),
    destination: z.enum(["rio", "calafate", "mendoza", "any"], {
        errorMap: () => ({ message: "Seleccioná un destino"}),
    }),
    comments: z.string().optional(),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;