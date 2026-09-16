"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { toolCategories } from "@/lib/data";

export function SystemsMatrix() {
  return (
    <div>
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
                <Card
                  key={tool.name}
                  className="transition-colors hover:border-line-strong"
                >
                  <CardHeader>
                    <CardTitle>{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-relaxed text-ink-muted">
                      {tool.use}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
