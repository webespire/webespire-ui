import { CircleCheckBig, Mail } from 'lucide-react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { assistYouData } from '@/lib/homePageData';
import { Checkbox } from '../ui/checkbox';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

export default function GetInTouchSection() {
    return (
        <section className="px-4 bg-muted/40">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* LEFT SIDE */}
                <div className="space-y-4">
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold leading-snug text-secondary">
                            Discover Tailored Solutions —{" "}
                            Zero Upfront Cost
                        </h1>
                    </div>

                    {/* CONTACT CARDS */}
                    <div className="grid grid-cols-3 gap-4 border border-black rounded-sm">
                        {[
                            { title: "Email", desc: "info@webespire.com" },
                            { title: "Call", desc: "+91 XXXXX XXXXX" },
                            { title: "Chat", desc: "24/7 Support" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center justify-center px-2 text-primary text-center border-r border-black my-2"
                            >
                                <Mail className="mx-auto mb-2 text-primary" size={20} />
                                <p className="text-sm font-medium text-wrap">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.desc}</p>
                            </div>
                        ))}
                    </div>

                    {/* CTA CARD */}
                    <div className="border rounded-xl text-center bg-background">
                        <Image
                            src="/consultent.svg"
                            alt="Free consultation"
                            width={1000}
                            height={200}
                        />
                        <p className="my-4 font-medium">
                            Start Your Project With Confidence — FREE Consultation
                        </p>
                    </div>

                    {/* TRUST BADGES */}
                    <div className="flex items-center justify-around border border-black rounded-sm p-2">
                        <Image src="/google.svg" alt="Google" width={100} height={100} />
                        <span className="h-12 border-r border-black"></span>
                        <Image src="/revied.svg" alt="Reviews" width={100} height={100} />
                        <span className="h-12 border-r border-black"></span>
                        <Image src="/clutch.svg" alt="Clutch" width={100} height={100} />
                    </div>
                </div>

                {/* RIGHT SIDE FORM */}
                <Card className="shadow-sm">
                    <CardHeader>
                        <CardTitle className='text-xl text-secondary font-bold'>Get in touch with us</CardTitle>
                        <CardDescription>
                            Please complete the contact form below, and we’ll get back to
                            you within the next 24 hours.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        <form className="space-y-5">

                            {/* INPUTS */}
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="name">Full name</Label>
                                    <Input id="name" placeholder="John Doe" />
                                </div>

                                <div>
                                    <Label htmlFor="company">Company</Label>
                                    <Input id="company" placeholder="Your company" />
                                </div>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="country">Country</Label>
                                    <Input id="country" placeholder="India" />
                                </div>

                                <div>
                                    <Label htmlFor="phone">Phone</Label>
                                    <Input id="phone" type="tel" placeholder="+91..." />
                                </div>
                            </div>

                            {/* ASSIST OPTIONS */}
                            <div>
                                <Label className="mb-3 block text-xl text-secondary font-bold">How can We Assist You?</Label>

                                <div className="grid md:grid-cols-2 gap-3">
                                    {assistYouData.map((item, index) => (
                                        <div key={index} className="flex items-center space-x-2">
                                            <Checkbox id={`assist-${index}`} />
                                            <label
                                                htmlFor={`assist-${index}`}
                                                className="text-sm text-muted-foreground cursor-pointer"
                                            >
                                                {item.question}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* MESSAGE */}
                            <div>
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    placeholder="Tell us about your project..."
                                    className="resize-none"
                                />
                            </div>

                            {/* SUBMIT */}
                            <Button type="submit" className="w-fit bg-secondary rounded-sm">
                                Submit <CircleCheckBig size={16} />
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}