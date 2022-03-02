import React from 'react';
import { Genre, useGetGenresQuery } from '../generated/graphql';
import { Autocomplete, Option } from 'chakra-ui-simple-autocomplete';
import { Badge, Box } from '@chakra-ui/react';
import { CloseIcon } from '@chakra-ui/icons';

const selectedBadge = (option: Option) => {
  return (
    <Badge
      borderRadius="md"
      px="4"
      colorScheme="messenger"
      mx={2}
      cursor="pointer"
    >
      {option.label}
      <CloseIcon ml={1} w={2} h={2} mb="4px" />
    </Badge>
  );
};

export const Genres: React.FC = () => {
  // const [options, setOptions] = React.useState<Option[]>([]);
  const [result, setResult] = React.useState<Option[]>([]);

  const { loading, error, data } = useGetGenresQuery();
  if (loading) return <>loading</>;
  if (error) return <p>boo.</p>;
  if (!data) return <p>nothing found</p>;

  const convert = (data: any): Option[] => {
    if (data) {
      return data.map((genre: Genre) => {
        return {
          value: genre?.name ?? '',
          label: genre?.name ?? '',
        };
      });
    }

    return [];
  };

  let options: Option[] = [];

  if (data) {
    options = convert(data?.genres?.result);
  }

  return (
    <div>
      <h3>Genres</h3>
      <Box maxW="md">
        <Autocomplete
          options={options}
          result={result}
          allowCreation={false}
          setResult={(options: Option[]) => setResult(options)}
          placeholder="start typing..."
          renderBadge={selectedBadge}
        />
      </Box>
    </div>
  );

  // const foo = [
  //   { value: 'javascript', label: 'Javascript' },
  //   { value: 'chakra', label: 'Chakra' },
  //   { value: 'react', label: 'React' },
  //   { value: 'css', label: 'CSS' },
  // ];
};
