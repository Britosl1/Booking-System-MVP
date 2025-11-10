# Booking System

A modern Next.js booking system built with TypeScript, Tailwind CSS, Redux, React Query, and React Hook Form + Zod.

## Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Query (TanStack Query)** - Server state management
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Home page
│   └── examples/          # Example components
├── lib/                   # Library code
│   ├── store.ts          # Redux store configuration
│   ├── hooks.ts          # Custom Redux hooks
│   └── providers.tsx     # Redux & React Query providers
└── public/               # Static assets
```

## Usage Examples

### Redux Store

Use the typed hooks in your components:

```typescript
import { useAppDispatch, useAppSelector } from '@/lib/hooks';

// In your component
const dispatch = useAppDispatch();
const someState = useAppSelector((state) => state.someSlice);
```

### React Query

```typescript
import { useQuery, useMutation } from '@tanstack/react-query';

// Fetch data
const { data, isLoading } = useQuery({
  queryKey: ['key'],
  queryFn: fetchFunction,
});

// Mutate data
const mutation = useMutation({
  mutationFn: updateFunction,
});
```

### Form Validation (React Hook Form + Zod)

See `app/examples/form-example.tsx` for a complete example.

```typescript
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
});

const { register, handleSubmit } = useForm({
  resolver: zodResolver(schema),
});
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
- [Zod](https://zod.dev/)
