import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(2, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    destination: z.enum(["Rio de Janeiro", "El Calafate", "Mendoza", "Bodega Gamboa", "Misiones", "Cualquiera"], {
        errorMap: () => ({ message: "Seleccioná un destino"}),
    }),
    comments: z.string().optional(),
});

export type RegisterFormValues = z.infer<typeof registerSchema>;