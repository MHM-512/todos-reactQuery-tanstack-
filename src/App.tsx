import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import Demo from "./component/Demo";

const Queryclient = new QueryClient();


export default function App() {


  return (
    <QueryClientProvider client={Queryclient}>
      <Demo />
    </QueryClientProvider>
  )
}


// https://www.youtube.com/watch?v=x_URkkWqBVM&t=282s?