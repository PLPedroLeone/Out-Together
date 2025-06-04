"use client"

import { RegisterFormValues, registerSchema } from "@/schemas/formValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export function RegisterForm() {
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

    const onSubmit = (data: RegisterFormValues) => {
        console.log("Formulario enviado", data);
        reset();
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
                <label htmlFor="workType" className="block font-medium text-[#02017] mb-3">¿Trabajás freelance o en relación de dependencia?</label>
                <select
                    id="workType"
                    {...register("workType")}
                    className="w-full border border-[#E2E8F0] rounded-md p-2"
                >
                    <option value="">Selecciona una opción</option>
                    <option value="freelance">Freelance</option>
                    <option value="employed">Relación de dependencia</option>
                    <option value="both">Ambos</option>
                </select>
                {errors.workType && <p className="text-red-500 text-xs">{errors.workType.message}</p>}
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
                className="rounded-md w-full bg-[#0369A0] px-3 py-2 text-sm font-medium text-white hover:bg-[#02587f] min-h-[40px] transition-colors"
            >
                Sumate a la comunidad
            </button>
        </form>
    )
}