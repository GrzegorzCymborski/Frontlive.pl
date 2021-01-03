import { ReactNode, useMemo, useCallback, memo } from 'react';
import { MDXProvider } from '@mdx-js/react';
import { Heading } from '../heading/Heading';
import { Image } from '../image/Image';

type ComponentProps = {
  readonly children: ReactNode;
};

type HeadingComponentProps = {
  readonly id: string;
  readonly children: {
    0: {
      props: {
        href: string;
        children: ReactNode;
        id: string;
      };
    };
    1: string;
  };
};

type ImageProps = {
  readonly src: string;
  readonly alt: string;
};

export const MdxCompProvider = memo<ComponentProps>(({ children }) => {
  const getHeadingProps = useCallback(({ children, id: headingId }: HeadingComponentProps) => {
    const { href, children: linkChildren, id: linkId } = children[0].props;
    const headingProps = children[1];
    return {
      linkChildren,
      linkId,
      headingProps,
      headingId,
      href,
    };
  }, []);

  const mdxComponents = useMemo(
    () => ({
      h2: (props: HeadingComponentProps) => (
        <Heading headingTag="h2" {...getHeadingProps(props)}></Heading>
      ),
      h3: (props: HeadingComponentProps) => (
        <Heading headingTag="h3" {...getHeadingProps(props)}></Heading>
      ),
      h4: (props: HeadingComponentProps) => (
        <Heading headingTag="h4" {...getHeadingProps(props)}></Heading>
      ),
      h5: (props: HeadingComponentProps) => (
        <Heading headingTag="h5" {...getHeadingProps(props)}></Heading>
      ),
      h6: (props: HeadingComponentProps) => (
        <Heading headingTag="h6" {...getHeadingProps(props)}></Heading>
      ),
      img: ({ alt, src }: ImageProps) => <Image src={src} alt={alt ? alt : ''} />,
    }),
    [],
  );

  return <MDXProvider components={mdxComponents}>{children}</MDXProvider>;
});

MdxCompProvider.displayName = 'MdxCompProvider';
