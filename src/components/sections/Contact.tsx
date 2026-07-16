'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Loader2, Mail, MessageCircle } from 'lucide-react'

import { Button } from '#/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '#/components/ui/form'
import { Input } from '#/components/ui/input'
import { Textarea } from '#/components/ui/textarea'
import { profile } from '#/content/profile'

const formSchema = z.object({
  name: z.string().min(2, 'O nome deve ter pelo menos 2 caracteres.'),
  email: z.string().email('Endereço de email inválido.'),
  message: z.string().min(10, 'A mensagem deve ter pelo menos 10 caracteres.'),
})

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(profile.contactFormEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(values),
      })

      if (response.ok) {
        setStatus('success')
        form.reset()
      } else {
        throw new Error('Falha ao enviar a mensagem.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Erro desconhecido.')
    }
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto mb-12 text-center"
        >
          <h2 className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
            Contato
          </h2>
          <p className="text-muted-foreground">
            Vamos conversar? Preencha o formulário ou fale comigo diretamente pelos links abaixo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            aria-live="polite"
          >
            {status === 'success' ? (
              <div className="p-6 bg-primary/10 border border-primary/20 rounded-xl text-center">
                <h3 className="text-xl font-bold text-primary mb-2">Mensagem enviada!</h3>
                <p className="text-muted-foreground">Obrigado pelo contato, retornarei em breve.</p>
                <Button variant="outline" className="mt-4" onClick={() => setStatus('idle')}>
                  Enviar outra mensagem
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} />
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
                          <Input placeholder="seu@email.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Como posso ajudar?" className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {status === 'error' && (
                    <p className="text-sm text-destructive">{errorMessage}</p>
                  )}
                  <Button type="submit" disabled={status === 'submitting'} className="w-full">
                    {status === 'submitting' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Enviar mensagem
                  </Button>
                </form>
              </Form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center gap-6"
          >
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">Email</h4>
                <p className="text-sm text-muted-foreground">{profile.email}</p>
              </div>
            </a>
            <a
              href={profile.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card border border-border rounded-xl hover:border-primary transition-colors"
            >
              <div className="p-3 bg-primary/10 text-primary rounded-lg">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold">WhatsApp</h4>
                <p className="text-sm text-muted-foreground">Enviar mensagem</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
