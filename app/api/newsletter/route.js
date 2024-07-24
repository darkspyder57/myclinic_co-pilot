//app/api/newsletter/route.js
import { NextResponse } from "next/server";
import { db } from "@/app/Firebase";
import { collection, addDoc } from "firebase/firestore";
import { transporter } from "@/app/utils/mailSender.utils";


export async function POST(req) {
    const {email} = await req.json();

    try {
        const docRef = await addDoc(collection(db, 'newsletters'), {
            email,
            timestamp: new Date()
        });

        await transporter.sendMail({
            from: process.env.NEXT_PUBLIC_AUTH_MAIL,
            to: email,
            subject: "Thank you for subscribing to our newsletter @MyClinic-Copilot",
            text: `Hey there,

Thank you so much for getting in touch! We want to confirm that we enabled your subscription for news and information regarding our services.
We will keep you updated.

Sincerely,

The MyClinicCopilot team`
        });
        return NextResponse.json({
            id: docRef.id,
            message: "Message sent successfully!!!"
        });
    } catch (error) {
        console.log("Error adding document: ",error);
        return NextResponse.json({error: "Failed to send message"},
        {status: 500});
    }
}