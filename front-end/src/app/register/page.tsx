import { RegisterForm } from "@/components/register";

export default function RegisterPage() {
    return (
        <div className="h-[100dvh] w-[100dvw] flex justify-center items-center p-4">
            <RegisterForm className="w-full max-w-4xl" />
        </div>
    );
}
