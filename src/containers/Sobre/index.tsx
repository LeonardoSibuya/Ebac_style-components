import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex quam sunt
      earum? Nihil at ducimus enim minima adipisci iusto delectus dolores, modi,
      cum reiciendis provident voluptas, ex ab repellendus! Debitis.
    </Paragrafo>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=leonardosibuya&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leonardosibuya&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
