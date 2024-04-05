"client side"
import { signIn, useSession } from 'next-auth/react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import React, { FormEvent } from 'react'
import { Button } from '../ui/button';
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Input } from '../ui/input';
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from "@/components/ui/input-otp"

export default function Login() {
    const { data: Sesssion, status } = useSession();
    console.log(Sesssion);
    const [otpDisplay, setOtpDisplay] = React.useState(false);
    const handleLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const phoneNumber = data.get('phoneNumber');
        const otp = data.get('otp');
        signIn("credentials", {
            phoneNumber: phoneNumber,
            otp: otp,
            redirect: false,
        }
        ).then((res) => {
            if (res?.error) {
                // alert(res.error);
                setOtpDisplay(true);
            }
        }
        ).catch((error) => {
        }
        );
    }
    if (status === 'unauthenticated') {
        return (
            <Dialog onOpenChange={(open) => {
                if (!open) {
                    setOtpDisplay(false);
                }
            }}>
                <DialogTrigger >
                    <Button variant="outline">Login</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px] bg-white" >
                    <DialogHeader>
                        <DialogTitle>Login</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        {otpDisplay ? "Enter the OTP sent to your phone number" : "Enter your phone number to login"}
                    </DialogDescription>
                    <form onSubmit={handleLogin}>
                        <div className="grid gap-4 py-4">
                            <Input inputMode="tel" placeholder="Enter your phone number" type="tel" name='phoneNumber' required={true} readOnly={otpDisplay} />
                            {otpDisplay &&
                                <div className="flex items-center justify-center w-full">
                                    <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS} required={true} name='otp'>
                                        <InputOTPGroup>
                                            <InputOTPSlot index={0} />
                                            <InputOTPSlot index={1} />
                                            <InputOTPSlot index={2} />
                                        </InputOTPGroup>
                                        <InputOTPSeparator />
                                        <InputOTPGroup>
                                            <InputOTPSlot index={3} />
                                            <InputOTPSlot index={4} />
                                            <InputOTPSlot index={5} />
                                        </InputOTPGroup>
                                    </InputOTP>
                                </div>
                            }
                        </div>
                        <DialogFooter>
                            <Button variant="outline" type="submit">Login</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog >
        )
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button className="rounded-full" size="icon" variant="ghost">
                    <Image
                        alt="Avatar"
                        className="rounded-full"
                        height={32}
                        src="/placeholder.svg"
                        width={32}
                        style={{
                            aspectRatio: "32/32",
                            objectFit: "cover",
                        }}
                    />
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white">
                <DropdownMenuLabel>LOGO</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
