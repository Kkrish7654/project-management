import React from "react";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Badge } from "../ui/badge";
import { TaskType } from "@/types/task.type";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  horizontalListSortingStrategy
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { LucideEllipsis, Plus } from "lucide-react";

const AvatarGroup = () => {
  const avatars = [
    "https://via.placeholder.com/40",
    "https://via.placeholder.com/40",
    "https://via.placeholder.com/40"
  ];

  return (
    <div className="flex items-center space-x-[-10px]">
      {avatars.map((avatar, index) => (
        <div key={index} className="relative w-10 h-10">
          <img
            src={avatar}
            alt={`Avatar ${index + 1}`}
            className="w-full h-full rounded-full border-2 border-gray-200 shadow-md"
          />
        </div>
      ))}
    </div>
  );
};

const BoardCard = ({ item }: { item: TaskType }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({
      id: item.id
    });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <Card className="bg-secondary">
        <CardHeader>{item.name}</CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 mb-4 flex-wrap">
            <Badge variant="destructive">{item.status}</Badge>
            <Badge variant="default">Devlopment</Badge>
            <Badge variant="destructive">{item.priority}</Badge>
          </div>
          <AvatarGroup />
        </CardContent>
      </Card>
    </div>
  );
};

const ProjectBoard = ({
  category,
  items
}: {
  category: string;
  items: TaskType[];
}) => {
  return (
    <>
      <div>
        <div className="flex items-center gap-2">
          <Button variant="outline" className="bg-primary-foreground">
            {category}
          </Button>

          <Button size="sm" className="bg-primary-foreground text-primary">
            <LucideEllipsis size={20} />
          </Button>
        </div>

        <Card className="mt-4 flex flex-col gap-2 p-4 bg-primary-foreground min-h-40">
          <SortableContext
            items={items.map((task) => task.id)}
            strategy={verticalListSortingStrategy}
          >
            {items?.map((item, i: number) => (
              <BoardCard key={item.id} item={item} />
            ))}
            <Button variant="secondary">
              <Plus size={12} />
              Create Card
            </Button>
          </SortableContext>
        </Card>
      </div>
    </>
  );
};

export default ProjectBoard;
