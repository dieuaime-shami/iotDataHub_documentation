import { NotFoundPage } from 'nextra-theme-docs'

export default function NotFound() {
  return (
    <NotFoundPage>
      <h1 className="x:text-3xl x:font-bold x:mb-4">Page Not Found</h1>
      <p className="x:text-gray-600">
        The documentation page you are looking for does not exist.
      </p>
    </NotFoundPage>
  )
}
