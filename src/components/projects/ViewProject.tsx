"use client";

import React, { useState, useEffect, useRef } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import ProjectBoard from "../helper/ProjectBoard";
import {
  tasks as T,
  TaskCategory,
  TaskType,
  ViewType
} from "@/types/task.type";
import {
  closestCorners,
  DndContext,
  DragEndEvent,
  DragStartEvent,
  useSensors,
  useSensor,
  PointerSensor,
  KeyboardSensor,
  DragOverEvent,
  UniqueIdentifier
} from "@dnd-kit/core";
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from "../ui/select";
import TableWithFeature from "../helper/TableWithFeature";
const Switcher = () => {
  const [items] = useState([
    { id: 1, name: "All Tasks" },
    { id: 2, name: "Pending" },
    { id: 3, name: "Upcoming" },
    { id: 4, name: "Completed" }
  ]);
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      const activeItem = itemRefs.current[activeIndex];
      const { offsetWidth, offsetLeft } = activeItem!;
      setSliderStyle({
        width: `${offsetWidth}px`,
        transform: `translateX(${offsetLeft}px)`,
        transition: "transform 0.3s ease, width 0.3s ease"
      });
    }
  }, [activeIndex]);

  return (
    <div className="relative flex items-center border rounded-full bg-primary-foreground overflow-hidden p-1">
      <div
        className="absolute top-0 bottom-0 left-0 bg-primary rounded-full"
        style={sliderStyle}
      ></div>
      {items.map((item, i) => (
        <div
          key={i}
          ref={(el: any) => (itemRefs.current[i] = el)}
          className={`relative z-10 p-2 px-4 cursor-pointer transition-all duration-200 ${
            activeIndex === i ? "text-secondary" : "text-gray-500"
          }`}
          onClick={() => setActiveIndex(i)}
        >
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

//////////////////////////////////////////////////////////

const ViewProject = () => {
  const [tasks, setTasks] = useState<TaskCategory>({
    inprogress: T.inprogress,
    onhold: T.onhold,
    overdue: T.overdue,
    completed: T.completed
  });

  const [activeId, setActiveId] = useState<number | null>(null);
  const [viewType, setViewType] = useState<ViewType>("List");

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const findContainer = (id: UniqueIdentifier) => {
    return Object.keys(tasks).find((key) =>
      tasks[key as keyof TaskCategory].some((task) => task.id === id)
    );
  };

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as number);
  };

  const handleDragOver = (event: DragOverEvent) => {
    const { active, over } = event;

    if (over === null) return;

    const activeContainer = findContainer(active.id);
    const overContainer = findContainer(over.id);

    console.log(activeContainer, overContainer, "containters");

    if (!activeContainer || !overContainer || activeContainer === overContainer)
      return;

    setTasks((prev: any) => {
      const activeItems = prev[activeContainer];
      const overItems = prev[overContainer];
      const activeIndex = activeItems.findIndex(
        (task: any) => task.id === active.id
      );
      const overIndex = overItems.findIndex((task: any) => task.id === over.id);

      const movedTask = activeItems[activeIndex];
      return {
        ...prev,
        [activeContainer]: activeItems.filter(
          (_: any, idx: string | number) => idx !== activeIndex
        ),
        [overContainer]: [
          ...overItems.slice(0, overIndex),
          movedTask,
          ...overItems.slice(overIndex)
        ]
      };
    });
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over === null) return;

    const activeContainer = findContainer(active.id) as
      | keyof TaskCategory
      | undefined;
    const overContainer = findContainer(over.id);

    if (!activeContainer || !overContainer || activeContainer !== overContainer)
      return;

    const activeIndex = tasks[activeContainer].findIndex(
      (task) => task.id === active.id
    );
    const overIndex = tasks[overContainer].findIndex(
      (task) => task.id === over.id
    );

    if (activeIndex !== overIndex) {
      setTasks((prev) => ({
        ...prev,
        [overContainer]: arrayMove(prev[overContainer], activeIndex, overIndex)
      }));
    }
    setActiveId(null);
  };

  return (
    <div className="mt-4 bg-secondary rounded-t-3xl">
      {/* Banner */}
      <div className="relative">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/005/081/820/small/banner-abstract-geometric-white-and-gray-color-background-illustration-free-vector.jpg"
          alt="Banner"
          className="overflow-hidden w-full h-40 rounded-t-3xl"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-t-3xl"></div>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white">
          <div className="text-start">
            <h1 className="text-2xl">Project Name</h1>
            <p className="text-sm">Xyz & Company</p>
          </div>
        </div>
      </div>
      <section className="p-5">
        <h1 className="text-xl">
          Project Name{" "}
          <span className="text-zinc-500 dark:text-zinc-400 text-sm">
            (Xyz & Company)
          </span>
        </h1>
        <div className="mt-4 flex items-center justify-between">
          <Switcher />
          <div className="flex items-center space-x-4">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="text" placeholder="Search task.." />
              <Button type="submit">Search</Button>
            </div>
            <Select onValueChange={(value: ViewType) => setViewType(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select View" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value={"Board"}>Board</SelectItem>
                  <SelectItem value={"List"}>List</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        {viewType === "List" ? (
          <TableWithFeature task={T.inprogress} />
        ) : viewType === "Board" ? (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
          >
            <div className="mt-8 grid grid-cols-4 gap-4">
              {Object.keys(tasks).map((section) => (
                <ProjectBoard
                  key={section}
                  category={section}
                  items={tasks[section as keyof TaskCategory]}
                />
              ))}
            </div>
          </DndContext>
        ) : null}
      </section>
    </div>
  );
};

export default ViewProject;
