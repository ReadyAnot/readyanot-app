import prisma from '..'

const getQuizQuestions = async () => {
  return await prisma.quizQuestion.findMany({
    orderBy: { id: 'asc' },
  })
}

export default getQuizQuestions
