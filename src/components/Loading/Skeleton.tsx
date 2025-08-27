import cn from "@/utils/cn";

export interface SkeletonProps {
  className?: string;
}

export default function Skeleton(props: SkeletonProps) {
  return (
    <div className={cn("relative overflow-hidden bg-gray-400  rounded-md", props.className)}>
      <div
        className="absolute inset-0 -translate-x-full
              bg-gradient-to-r from-transparent via-white/30 to-transparent
              animate-[shimmer_1.5s_infinite]"
      ></div>
    </div>
  );
}
