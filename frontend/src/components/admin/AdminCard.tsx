import { Stat, StatLabel, StatNumber, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import { VFC } from "react";

type Props = {
  title: string,
  stat: string,
  link: string,
}

export const AdminCard: VFC<Props> = ({title,stat,link}) => {
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <Link href={link}>
        <a>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber
            fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </a>
      </Link>
    </Stat>
  );
};
