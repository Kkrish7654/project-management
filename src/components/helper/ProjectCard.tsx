import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../ui/card";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
import { Progress } from "../ui/progress";
import Link from "next/link";

const ProjectCard = () => {
  const progress = 40;
  return (
    <>
      <Card>
        <CardHeader>
          <div className="flex justify-between">
            <div>
              <CardTitle className="text-lg">Project Name</CardTitle>
              <CardDescription>Client: Xyz & Company</CardDescription>
            </div>
            <Link href="/projects/1">
              <Button>Open</Button>
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <p>
              Start:{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                12th July 2024
              </span>
            </p>
            <p>
              Deadline:{" "}
              <span className="text-zinc-500 dark:text-zinc-400">
                12th August 2024
              </span>
            </p>
          </div>
        </CardHeader>

        <CardContent>
          <p className="font-bold">$2000</p>
          <h3 className="text-zinc-500 dark:text-zinc-400">TotalBudget</h3>

          <p className="text-zinc-500 dark:text-zinc-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            sagittis, sem quis lacinia faucibu.
          </p>

          <p className="text-end">{progress}% complete</p>
          <Progress value={progress} className="mt-4" />
        </CardContent>
      </Card>
    </>
  );
};

export default ProjectCard;
