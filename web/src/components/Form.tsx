"use client"

import { RegisterFormValues, registerSchema } from "@/schemas/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser"
import { useState } from "react";

export function RegisterForm() {
    const [isSending, setIsSending] = useState(false);
    const [message, setMessage] = useState<{ type: "success" | "error"; text: string} | null>(null)
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<RegisterFormValues>({
        resolver: zodResolver(registerSchema),
        mode: "onTouched",
        reValidateMode: "onChange",
    });

    const onSubmit = async (data: RegisterFormValues) => {
        setIsSending(true)
        setMessage(null)

        try {
            await emailjs.send(
                "service_7bv12nh",
                "template_hhr2sie",
                {
                    name: data.name,
                    email: data.email,
                    destination: data.destination,
                    comments: data.comments,
                },
                "eI6_uB2EZNvfo-LUR"
            );
            setMessage({ type: "success", text: "Formulario enviado correctamente!" })
            reset()
        } catch (error) {
            console.error("Emailjs error: ", error)
            setMessage({ type: "error", text: "Ocurrio un error al enviar el formulario. Inténtelo más tarde."})
        } finally {
            setIsSending(false)
        }
    };

    return (
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                    <label htmlFor="name" className="block font-medium text-[#02017] mb-3">Nombre completo</label>
                    <input 
                        id="name"
                        {...register("name")}
                        placeholder="Tu nombre"
                        className="w-full border border-[#E2E8F0] rounded-md p-2"
                    />
                    {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                </div>

                <div className="space-y-2 text-sm">
                    <label htmlFor="email" className="block font-medium text-[#02017] mb-3">Email</label>
                    <input
                        id="email"
                        type="email"
                        {...register("email")}
                        placeholder="tu@email.com"
                        className="w-full border border-[#E2E8F0] rounded-md p-2"
                    />
                    {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
                </div>
            </div>

            <div className="space-y-2 text-sm">
                <label htmlFor="destination" className="block mb-3 font-medium text-[#02017]">¿Qué destino te gustaría?</label>
                <select
                    id="destination"
                    {...register("destination")}
                    className="w-full border border-[#E2E8F0] rounded-md p-2 "
                >
                    <option value="">Selecciona un destino</option>
                    <option value="rio">Río de Janeiro</option>
                    <option value="calafate">El Calafate</option>
                    <option value="mendoza">Mendoza</option>
                    <option value="mendoza">Bodega Gamboa</option>
                    <option value="mendoza">Misiones</option>
                    <option value="any">Cualquiera</option>
                </select>
                {errors.destination && <p className="text-red-500 text-xs">{errors.destination.message}</p>}
            </div>

            <div className="space-y-2 text-sm">
                <label htmlFor="comments" className="block mb-3 font-medium text-[#02017]">Comentarios adicionales</label>
                <textarea 
                    id="comments"
                    {...register("comments")}
                    placeholder="Cuéntanos más sobre lo que buscas..."
                    className="w-full border border-[#E2E8F0] rounded-md p-2 min-h-[80px]"
                />
            </div>

            <button
                type="submit"
                disabled={isSending}
                className="rounded-md w-full bg-[#0369A0] px-3 py-2 text-sm font-medium text-white hover:bg-[#02587f] min-h-[40px] transition-colors"
            >
                {isSending ? (
                    <svg className="animate-spin h-5 w-5 mr-2 text-white" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                ) : null}
                {isSending ? "Enviando..." : "Sumate a la comunidad"}
            </button>
            {message && (
                <p
                    className={`text-center text-sm ${
                        message.type === "success" ? "text-green-600" : "text-red-500"
                    }`}
                >
                    {message.text}
                </p>
            )}
        </form>
    )
}