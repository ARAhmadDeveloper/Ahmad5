"use client";
import { lusitana } from '@/app/ui/fonts';
import {
  AtSymbolIcon,
  KeyIcon,
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/20/solid';
import { Button } from './button';
import { useActionState } from 'react';
import { authenticate } from '@/app/lib/actions';
import { useSearchParams } from 'next/navigation';

export default function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard';
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form
      action={formAction}
      className="space-y-3
                 animate-slide-in-down /* slide+fade the whole form */
                 motion-safe:delay-100"
    >
      <div
        className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8
                   animate-fade-in /* fade in inputs/container */
                   motion-safe:delay-200"
      >
        <h1 className={`${lusitana.className} mb-3 text-2xl`}>
          Please log in to continue.
        </h1>

        {/* email field */}
        <div
          className="w-full
                     animate-fade-in
                     motion-safe:delay-300"
        >
          <label
            htmlFor="email"
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          >
            Email
          </label>
          <div className="relative">
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="Enter your email address"
              className="peer block w-full rounded-md border border-gray-200
                         py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <AtSymbolIcon className="pointer-events-none absolute left-3 top-1/2
                                    h-[18px] w-[18px] -translate-y-1/2 text-gray-500
                                    peer-focus:text-gray-900" />
          </div>
        </div>

        {/* password field */}
        <div
          className="mt-4
                     animate-fade-in
                     motion-safe:delay-400"
        >
          <label
            htmlFor="password"
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
          >
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength={6}
              placeholder="Enter password"
              className="peer block w-full rounded-md border border-gray-200
                         py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
            />
            <KeyIcon className="pointer-events-none absolute left-3 top-1/2
                                h-[18px] w-[18px] -translate-y-1/2 text-gray-500
                                peer-focus:text-gray-900" />
          </div>
        </div>

        {/* hidden redirect input */}
        <input type="hidden" name="redirectTo" value={callbackUrl} />

        {/* submit button */}
        <Button
          className={`mt-4 w-full
                      animate-fade-in
                      motion-safe:delay-500`}
          aria-disabled={isPending}
        >
          Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
        </Button>

        {/* error message */}
        <div
          className={`flex h-8 items-end space-x-1
                      ${errorMessage ? 'animate-fade-in motion-safe:delay-600' : ''}`}
        >
          {errorMessage && (
            <>
              <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
              <p className="text-sm text-red-500">{errorMessage}</p>
            </>
          )}
        </div>
      </div>
    </form>
  );
}