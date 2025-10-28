import DottedGlowBackground from "@/components/ui/dotted-glow-background";
import Link from "next/link";

const Home = () => {
  return (
    <main className="h-screen relative">
      <div className="flex absolute md:flex-row flex-col gap-10 text-center md:text-left lg:gap-28 inset-0 items-center justify-center h-screen z-20 p-2">
        <h1 className="text-lg">
          Hi, I&apos;m <br />
          <strong className="text-4xl font-semibold">Vitor Lima</strong>
        </h1>

        <div className="flex flex-col justify-center">
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
            <Link href="/blog" className="text-cyan-400 underline">
              blog here
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="absolute inset-0 bg-black/40 z-10" />

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
    </main>
  );
};

export default Home;
