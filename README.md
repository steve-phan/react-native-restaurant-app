### Integration styled-components with React Native using Typescript :

> npm @types/styled-components-react-native -D
> need using parenthese styled(<Component>) instead of styled.<Component> to avoid error `Property 'space' does not exist on type 'DefaultTheme'` typescript
> sometimes need using ` const Component = styled(View).attrs()``; `

### Experienced with typescript

> Needed `interface` for props suggestions cool :)
> When using a third lib sometimes we got error `implicitly has an 'any' type.`. so we need `declare module third-lib-name` into .d.ts file ! More about details [typeRoots](https://www.typescriptlang.org/tsconfig#typeRoots)
