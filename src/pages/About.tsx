import { A } from "@solidjs/router";
import { ArrowLeft, Code2, Eye, Zap, ShieldCheck } from "lucide-solid";
import Navbar from "../ui/Navbar";

const About = () => {
  const features = [
    {
      icon: Code2,
      title: "Multi-Language Support",
      description:
        "Write, run, and test code seamlessly across Python, JavaScript, Java, C++, and C with a fast browser-based environment.",
    },
    {
      icon: Eye,
      title: "Execution Visualizer",
      description:
        "Understand how your code works by following execution step-by-step, including variables, stack frames, and program flow.",
    },
    {
      icon: Zap,
      title: "Fast Code Execution",
      description:
        "Get quick feedback while solving coding problems without complicated local setup or configuration.",
    },
    {
      icon: ShieldCheck,
      title: "Safe Coding Environment",
      description:
        "Practice and experiment in an isolated coding environment designed to make learning and development easier.",
    },
  ];

  return (
    <div class="min-h-screen bg-background text-foreground transition-colors duration-500 overflow-hidden">
      {/* Background Effects */}
      <div class="mesh-bg opacity-50 pointer-events-none fixed inset-0" />
      <div class="noise opacity-5 pointer-events-none fixed inset-0" />

      {/* Navigation */}
      <Navbar />

      <main class="relative z-10 max-w-5xl mx-auto px-6 py-16 md:py-24">
        {/* Back Button */}
        <A
          href="/"
          class="group inline-flex items-center gap-2 text-sm font-bold text-brand-secondary hover:text-foreground mb-12 transition-all duration-300"
        >
          <ArrowLeft class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Home
        </A>

        {/* Hero */}
        <section class="mb-16">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-background/50 backdrop-blur-sm text-sm font-semibold text-brand-secondary mb-6">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Built for Developers
          </div>

          <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
            About{" "}
            <span class="text-accent-gradient">
              CodeArena
            </span>
          </h1>

          <p class="max-w-3xl text-lg md:text-xl text-brand-secondary leading-relaxed font-medium">
            CodeArena is a modern online coding platform designed to make
            programming practice simple, fast, and accessible. Write code,
            execute it instantly, and improve your problem-solving skills
            directly from your browser.
          </p>
        </section>

        {/* Mission */}
        <section class="bento-card p-8 md:p-10 mb-16">
          <div class="flex items-center gap-3 mb-5">
            <div class="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent">
              <Code2 class="w-5 h-5" />
            </div>

            <h2 class="text-2xl md:text-3xl font-bold">
              Our Mission
            </h2>
          </div>

          <p class="text-brand-secondary text-base md:text-lg leading-relaxed">
            Our mission is to provide a zero-setup coding environment where
            developers and students can focus on solving problems instead of
            configuring development environments. CodeArena brings essential
            programming tools directly into the browser.
          </p>
        </section>

        {/* Features */}
        <section>
          <div class="mb-8">
            <h2 class="text-3xl md:text-4xl font-bold mb-3">
              What makes CodeArena different?
            </h2>

            <p class="text-brand-secondary text-lg">
              Everything you need to practice, experiment, and understand code.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  class="bento-card group p-7 hover:-translate-y-1 transition-all duration-300"
                >
                  <div class="flex items-start gap-4">
                    <div class="shrink-0 flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                      <Icon class="w-6 h-6" />
                    </div>

                    <div>
                      <h3 class="text-xl font-bold text-foreground mb-3">
                        {feature.title}
                      </h3>

                      <p class="text-sm md:text-base text-brand-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technology Section */}
        <section class="mt-16 p-8 md:p-10 rounded-3xl border border-border bg-background/40 backdrop-blur-md">
          <h2 class="text-2xl md:text-3xl font-bold mb-5">
            Built for the modern web
          </h2>

          <p class="text-brand-secondary text-base md:text-lg leading-relaxed mb-6">
            CodeArena combines a clean developer-focused interface with modern
            web technologies to create a smooth coding experience. From
            responsive layouts to interactive execution tools, every part of
            the platform is designed around simplicity and productivity.
          </p>

          <div class="flex flex-wrap gap-3">
            {[
              "SolidJS",
              "TypeScript",
              "Tailwind CSS",
              "Modern Web APIs",
              "Multi-Language Execution",
            ].map((technology) => (
              <span
                class="px-4 py-2 rounded-full border border-border bg-background/60 text-sm font-semibold text-brand-secondary hover:text-foreground hover:border-accent transition-colors duration-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section class="text-center mt-20">
          <h2 class="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to enter the arena?
          </h2>

          <p class="text-brand-secondary mb-8">
            Start coding, solve problems, and build your skills with CodeArena.
          </p>

          <A
            href="/"
            class="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-background font-bold hover:opacity-90 hover:scale-105 transition-all duration-300"
          >
            Start Coding
            <ArrowLeft class="w-4 h-4 rotate-180" />
          </A>
        </section>
      </main>
    </div>
  );
};

export default About;
