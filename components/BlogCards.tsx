import Link from "next/link";
import Image from "next/image";

interface Story {
    uuid: string;
    full_slug: string;
    name: string;
    content: {
        image?: { filename: string };
    };
}

export default function BlogCards({ stories }: { stories: Story[] }) {
    return (
        <div className="gap-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {stories.map((story) => (
                <Link
                    key={story.uuid}
                    href={`/${story.full_slug}`}
                    title={story.name}
                    className="group cursor-pointer shrink-0 bg-black-500 border rounded-xl overflow-hidden shadow-xl"
                >
                    {story.content.image?.filename && (
                        <div className="rounded-t-xl overflow-hidden aspect-video relative">
                            <Image
                                src={story.content.image.filename}
                                alt={story.name}
                                width={400}
                                height={225}
                                className="object-cover object-center group-hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    )}
                    <div className="p-6">
                        <div className="font-bold line-clamp-2 duration-300">{story.name}</div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
