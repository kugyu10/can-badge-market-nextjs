interface BreadcrumbProps {
  children?: React.ReactNode
}

/** パンくずリスト */
const Breadcrumb = ({ children }: BreadcrumbProps) => <ol>{children}</ol>

export default Breadcrumb
