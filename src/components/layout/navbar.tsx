"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between gap-4">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Icons.Logo className="h-8 w-8 text-primary" />
                        <span className="hidden text-xl font-bold tracking-tight sm:inline-block">
                            Ilm Book Markaz
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden items-center gap-6 md:flex">
                        <Link
                            href="/"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Home
                        </Link>
                        <Link
                            href="/category/books"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Books
                        </Link>
                        <Link
                            href="/category/stationary"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            Stationary
                        </Link>
                        <Link
                            href="/about"
                            className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                        >
                            About Us
                        </Link>
                    </nav>

                    {/* Search Bar (Hidden on small mobile, visible on md+) */}
                    <div className="hidden flex-1 items-center justify-center px-4 md:flex max-w-md">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search for books, stationary..."
                                className="w-full rounded-full border border-input bg-muted px-4 py-2 pl-10 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                            <Icons.Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                            <Icons.Search className="h-5 w-5 md:hidden" />
                            <span className="sr-only">Search</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-9 w-9 px-0">
                            <Icons.User className="h-5 w-5" />
                            <span className="sr-only">Account</span>
                        </Button>
                        <Button variant="ghost" size="sm" className="h-9 w-9 px-0 relative">
                            <Icons.ShoppingCart className="h-5 w-5" />
                            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-secondary text-[10px] font-bold text-white">
                                0
                            </span>
                            <span className="sr-only">Cart</span>
                        </Button>

                        {/* Mobile Menu Toggle */}
                        <Button
                            variant="ghost"
                            size="sm"
                            className="h-9 w-9 px-0 md:hidden"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? (
                                <Icons.X className="h-5 w-5" />
                            ) : (
                                <Icons.Menu className="h-5 w-5" />
                            )}
                            <span className="sr-only">Menu</span>
                        </Button>
                    </div>
                </div>
            </Container>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="border-t md:hidden">
                    <Container className="py-4">
                        <nav className="flex flex-col gap-4">
                            <Link
                                href="/"
                                className="text-sm font-medium hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/category/books"
                                className="text-sm font-medium hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Books
                            </Link>
                            <Link
                                href="/category/stationary"
                                className="text-sm font-medium hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Stationary
                            </Link>
                            <Link
                                href="/about"
                                className="text-sm font-medium hover:text-primary"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                About Us
                            </Link>
                        </nav>
                        <div className="mt-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            />
                        </div>
                    </Container>
                </div>
            )}
        </header>
    );
}
