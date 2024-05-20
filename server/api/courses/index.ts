
import {allCourses} from "~/server/helper";
import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

export default defineEventHandler( async (event) => {
   const { meta } = getQuery(event)


   return allCourses(meta as boolean)
   // return prisma.course.findMany();

})
