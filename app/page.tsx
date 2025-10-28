import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative h-screen bg-zinc-950 text-zinc-50">
      <div className="flex flex-col items-center justify-center absolute top-0 left-0 w-full h-full z-10 bg-black/50">
        <h1 className="text-lg">
          Hi, I&apos;m{" "}
          <strong className="text-4xl font-semibold">Vitor Lima</strong>
        </h1>

        <p className="mt-2">
          Software engineer, currently building{" "}
          <Link
            href="https://matrices.ai"
            target="_blank"
            className="text-cyan-400 underline"
          >
            Matrices
          </Link>
          .
        </p>

        <p className="mt-1">
          I am starting to write more often, check out my{" "}
          <Link
            href="https://vitorlima.com/blog"
            target="_blank"
            className="text-cyan-400 underline"
          >
            blog here
          </Link>
          .
        </p>
      </div>

      <DottedGlowBackground
        className="pointer-events-none mask-radial-to-90% mask-radial-at-center"
        opacity={1}
        gap={10}
        radius={1.6}
        colorLightVar="--color-neutral-500"
        glowColorLightVar="--color-neutral-600"
        colorDarkVar="--color-neutral-500"
        glowColorDarkVar="--color-sky-800"
        backgroundOpacity={0}
        speedMin={0.3}
        speedMax={1.6}
        speedScale={1}
      />
    </div>
  );
};

export default Home;
