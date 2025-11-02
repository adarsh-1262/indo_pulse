import React from 'react'
import { Link } from 'react-router-dom'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  username: z.string().min(2, { message: "Username must be at least 2 characters long" }).max(50, { message: "Username must be at most 50 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }).max(100, { message: "Password must be at most 100 characters long" }),
})

const SignUpForm = () => {
  // 1. Define your form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  })

  // 2. Define a submit Handler
  function onSubmit(values) {

    console.log(values)
  }
  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl sm:max-w-5xl mx-auto flex-col md:flex-row md:items-center gap-5'>
      {/* Left Side - Image */}
      <div className='flex-1'>
        <Link
         to={"/"}
         className='font-bold text-2xl sm:text-4xl flex flex-wrap'
        >
          <span className='text-red-700'>Indo</span>
          <span className='text-red-900'>Pulse</span>
        </Link>

        <h2 className='text-[24px] md:text-[30px] font-bold leading-[140%] tracking-tighter pt-5 sm:pt-12'>
          Create a new account
        </h2>

        <p className='text-slate-500 text-[14px] font-medium leading-[140%] md:text-[16px] md:font-normal mt-2'>
          Welcome to IndoPulse! Please fill in the details below to create your account.
        </p>
      </div>

      {/* Right Side - Form */}
      <div className='flex-1'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder="username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>

                    <FormControl>
                      <Input
                        type="email"
                        placeholder="xyz@email.com"
                        {...field}
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className='w-full bg-red-950'>Submit</Button>
          </form>
        </Form>
        <div className='flex gap-2 text-sm mt-5'>
        <span>Already have an account?</span>
        <Link to={"/signin"} className='text-red-700 font-medium'>
          Sign In
        </Link>
        </div>
      </div>
      </div>
    </div>
  )
}

export default SignUpForm
