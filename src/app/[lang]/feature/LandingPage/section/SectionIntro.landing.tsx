"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function SectionIntroLanding() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("LandingPage.title");
  });

  useEffect(() => {
    if (!api) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index}>
              <Card>
                <CardContent className="flex aspect-video items-center justify-center p-6 h-128">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-2 transform -translate-y-1/2" />
        <CarouselNext className="absolute top-1/2 right-2 transform -translate-y-1/2" />
      </Carousel>
      <div className="text-muted-foreground py-2 text-center text-sm">
        {t("LandingPage.SectionIntro.slide")} {current}{" "}
        {t("LandingPage.SectionIntro.of")} {count}
      </div>
    </div>
  );
}
