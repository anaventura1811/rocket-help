import { Button as NButton, IButtonProps, Heading } from "native-base";

type Props = IButtonProps & {
  title: string;
}
export function Button({ title, ...rest }: Props) {

  return (
    <NButton
      bg={"green.700"}
      h={14}
      fontSize={"md"}
      rounded={"sm"}
      _pressed={{
        bg: "green.500"
      }}
      {...rest}
    >
      <Heading color={"white"} fontSize={"md"}>{title}</Heading>
    </NButton>
  )
}