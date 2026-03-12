import { LoadingBreadcrumb } from "@/components/ui/animated-loading-svg-text-shimmer";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-pure-black text-accent-gray">
      <LoadingBreadcrumb text="Cooking" />
    </div>
  );
}
