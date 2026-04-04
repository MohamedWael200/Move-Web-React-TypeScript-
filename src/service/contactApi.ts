import type {contactDataApiResponse, ContactPayload} from "../types/contactData.ts";
import {useEffect, useState} from "react";

export function useMakeContact() {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const makeContact = async (payload: ContactPayload) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const response = await fetch("http://127.0.0.1:8000/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });

            if (!response.ok) {
                throw new Error("Something went wrong");
            }

            setSuccess(true);
        } catch (err : any) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { makeContact, loading, success, error };
}

export function useContact() {
    const [contact, setContact] = useState<ContactPayload[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchContact = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/contact");
            const data: contactDataApiResponse = await response.json();
            setContact(data.contacts);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchContact();
    }, []);

    return { contact , loading}
}