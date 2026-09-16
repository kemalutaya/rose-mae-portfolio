"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { DarkPanel } from "@/components/DarkPanel";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogDescription,
  MorphingDialogClose,
} from "@/components/motion-primitives/morphing-dialog";
import { toolCategories } from "@/lib/data";

export function SystemsMatrix() {
  return (
    <div className="flex flex-col gap-6">
      <Tabs defaultValue={toolCategories[0].id}>
        <TabsList className="max-w-full">
          {toolCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {toolCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Badge>{category.badge}</Badge>

            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {category.tools.map((tool) => (
                <MorphingDialog key={tool.name}>
                  <MorphingDialogTrigger className="block w-full text-left">
                    <Card className="h-full transition-colors hover:border-line-strong">
                      <CardHeader>
                        <CardTitle>{tool.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm leading-relaxed text-ink-muted">
                          {tool.use}
                        </p>
                      </CardContent>
                    </Card>
                  </MorphingDialogTrigger>
                  <MorphingDialogContainer>
                    <MorphingDialogContent className="relative w-[min(28rem,90vw)] rounded-2xl border border-line bg-surface p-6">
                      <MorphingDialogTitle className="text-lg font-semibold text-ink">
                        {tool.name}
                      </MorphingDialogTitle>
                      <p className="mt-1 text-[11px] tracking-wider text-ink-subtle uppercase">
                        {category.label}
                      </p>
                      <MorphingDialogDescription className="mt-3 text-sm leading-relaxed text-ink-muted">
                        {tool.use}
                      </MorphingDialogDescription>
                      <MorphingDialogClose className="rounded-full bg-canvas-alt p-1.5 text-ink-muted hover:text-ink" />
                    </MorphingDialogContent>
                  </MorphingDialogContainer>
                </MorphingDialog>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <DarkPanel eyebrow="Daily Driver" title="Availity, first thing every morning">
        Eligibility sweeps run through Availity before the first patient of
        the day is checked in — active coverage, copay, and deductible
        status confirmed while the front desk is still opening up.
      </DarkPanel>
    </div>
  );
}
