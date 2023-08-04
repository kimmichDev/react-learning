import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export default async function handler(req, res) {
    // drop all prev datas
    const { count: old_post_count } = await prisma.post.deleteMany();
    const { count: old_catgory_count } = await prisma.category.deleteMany();
    console.log({ old_post_count, old_catgory_count });

    // new data
    // category
    await prisma.category.createMany({
        data: [
            { "title": "Health" },
            { "title": "Sport" },
        ]
    })

    // post
    const health_id = await prisma.category.findFirst({
        where: { title: "Health" }
    });
    const sport_id = await prisma.category.findFirst({
        where: { title: "Sport" }
    });
    await prisma.post.createMany({
        data: [
            { title: "How to drink water", slug: "how-to-drink-water", category_id: health_id?.id, status: "APPROVED" },
            { title: "How to sleep", slug: "how-to-sleep", category_id: health_id?.id, status: "PENDING" },
            { title: "How to play football", slug: "how-to-play-football", category_id: sport_id?.id, status: "PENDING" },
            { title: "How to play game", slug: "how-to-play-game", category_id: sport_id?.id, status: "APPROVED" },
        ]
    })

    res.status(200).json({ name: "hello" });
}