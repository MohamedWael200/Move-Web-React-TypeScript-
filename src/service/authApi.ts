import {useState} from "react";
import type {registerPayload} from "../types/registerData.ts";

export function useMakeRegister() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const makeRegister = async (payload: registerPayload) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const formData = new FormData();
            formData.append("name", payload.name);
            formData.append("email", payload.email);
            formData.append("password", payload.password);
            formData.append("bio", payload.bio);

            if (payload.avatar) {
                formData.append("avatar", payload.avatar);
            }

            const response = await fetch('http://127.0.0.1:8000/api/register', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            setSuccess(true);
        } catch (error: any) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };
    return { makeRegister, loading, error , success };
}