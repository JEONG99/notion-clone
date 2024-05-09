"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useMutation } from "convex/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ImageIcon, X } from "lucide-react";
import { useCoverImage } from "@/hooks/use-cover-image";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { useEdgeStore } from "@/lib/edgestore";

interface CoverProps {
  url?: string;
  preview?: boolean;
}

const Cover = ({ url, preview }: CoverProps) => {
  const params = useParams();
  const { edgestore } = useEdgeStore();
  const remove = useMutation(api.documents.removeCoverImage);
  const coverImage = useCoverImage();

  const onRemove = () => {
    if (url) {
      edgestore.publicFiles.delete({
        url,
      });
    }
    remove({
      documentId: params.documentId as Id<"documents">,
    });
  };

  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} alt="Cover" fill className="object-cover" />}
      {url && !preview && (
        <div
          className="opacity-0 group-hover:opacity-100 absolute bottom-5 right-5
        flex items-center gap-x-2"
        >
          <Button
            onClick={() => coverImage.onReplace(url)}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <ImageIcon className="w-4 h-4 mr-2" />
            Change cover
          </Button>
          <Button
            onClick={onRemove}
            className="text-muted-foreground text-xs"
            variant="outline"
            size="sm"
          >
            <X className="w-4 h-4 mr-2" />
            Remove
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cover;
