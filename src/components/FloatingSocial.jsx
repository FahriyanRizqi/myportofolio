import { profile } from "../data/profile";

export default function FloatingSocial() {
  return (
    <div className="fixed bottom-6 left-6 z-40 hidden flex-col gap-3 lg:flex">
      {profile.socials.slice(0, 3).map((social) => {
        const Icon = social.icon;
        return (
          <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label} className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-night/70 text-slate-200 backdrop-blur transition hover:-translate-y-1 hover:text-cyanGlow hover:shadow-neon">
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
