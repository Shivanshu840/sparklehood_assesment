import prisma from "./db";

async function main() {
  const incident1 = await prisma.incident.create({
    data: {
      title: 'Unexpected Behavior in Language Model',
      description: 'A large language model generated responses that were factually incorrect and potentially misleading in a user interaction.',
      severity: 'Medium', 
    },
  });

  const incident2 = await prisma.incident.create({
    data: {
      title: 'Bias Amplification in Image Recognition System',
      description: 'An image recognition system showed a significantly higher rate of misclassification for a specific demographic group, indicating bias amplification.',
      severity: 'High',
    },
  });

  const incident3 = await prisma.incident.create({
    data: {
      title: 'Minor Data Leak from Experimental AI',
      description: 'During a testing phase, a small amount of non-sensitive training data was unintentionally exposed in a public log file.',
      severity: 'Low',
    },
  });

}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });