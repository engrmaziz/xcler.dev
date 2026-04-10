"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import type { TeamMember } from "@/types";

const schema = z.object({
  name: z.string().min(1),
  role: z.string().min(1),
  bio: z.string().min(1),
  order: z.number(),
});

type FormData = z.infer<typeof schema>;

interface Props {
  member?: Partial<TeamMember>;
  onSubmit: (data: FormData) => void;
}

export function TeamForm({ member, onSubmit }: Props) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: member?.name ?? "",
      role: member?.role ?? "",
      bio: member?.bio ?? "",
      order: member?.order ?? 0,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-xl">
      <div>
        <label className="block text-xs font-mono text-[#888888] mb-1">Name</label>
        <input
          {...register("name")}
          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-[#888888] mb-1">Role</label>
        <input
          {...register("role")}
          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50"
        />
      </div>
      <div>
        <label className="block text-xs font-mono text-[#888888] mb-1">Bio</label>
        <textarea
          {...register("bio")}
          rows={4}
          className="w-full bg-[#141414] border border-[#222222] rounded-lg px-3 py-2 text-[#EDEDED] text-sm focus:outline-none focus:border-[#E8FF00]/50 resize-none"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2.5 bg-[#E8FF00] text-[#0D0D0D] font-medium rounded-lg text-sm hover:bg-[#C8DC00] transition-colors"
      >
        Save Member
      </button>
    </form>
  );
}
