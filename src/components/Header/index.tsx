import Navbar from '../Navbar';

export interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  activeCategory?: string;
  onCategoryChange?: (category: any) => void;
  onOpenTracker?: () => void;
  onOpenLiveChat?: () => void;
  onOpenContactUs?: () => void;
}

export default function Header(props: HeaderProps) {
  return (
    <Navbar
      searchQuery={props.searchQuery}
      onSearchChange={props.onSearchChange}
      activeCategory={props.activeCategory || 'featured'}
      onCategoryChange={props.onCategoryChange || (() => {})}
      onOpenTracker={props.onOpenTracker || (() => {})}
      onOpenLiveChat={props.onOpenLiveChat || (() => {})}
      onOpenContactUs={props.onOpenContactUs}
    />
  );
}
