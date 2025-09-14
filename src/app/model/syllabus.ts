interface SyllabusNode {
  id: string;
  label: string;
  level: number;
  children?: SyllabusNode[];
  expanded?: boolean;
}
