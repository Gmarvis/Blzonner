import { PropsWithChildren } from 'react';
import { cn } from '~/lib/utils';

export interface PageLayoutProps {
  width?: 'screen' | 'narrow';
  height?: 'overflow' | 'screen';
  className?: string;
}

export function PageLayout(props: PropsWithChildren<PageLayoutProps>) {
  return (
    <main
      className={cn(
        'flex-1 flex flex-col h-full w-full px-4',
        {
          'max-w-6xl mx-auto': props.width === 'narrow',
          'h-[calc(100svh-1rem)] max-h-[calc(100svh-1rem)]':
            props.height === 'screen'
        },
        props.className
      )}
    >
      {props.children}
    </main>
  );
}

export function PageBody() {
  return <div></div>;
}

interface PageHeaderProps {
  title: string;
  subTitle: string;
  actions?: React.ReactNode;
}

export function PageHeader(props: PageHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col sm:flex-row justify-between  sm:items-center gap-2 py-2'
      )}
    >
      <div>
        <h1 className="text-xl font-bold">{props.title}</h1>
        <p className="text-gray-500 text-xs">{props.subTitle}</p>
      </div>
      <div>{props.actions}</div>
    </div>
  );
}

export function PageFooter() {
  return <div></div>;
}

export function PageSidebar() {
  return <div></div>;
}

export function PageSection(props: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'border border-1-border w-full  p-2 rounded-md',
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

export function PageAction() {
  return <div></div>;
}

export function PageWithMenu() {
  return <div></div>;
}
