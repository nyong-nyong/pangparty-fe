import { Link } from "react-router-dom";

export default function ReceicedEvent() {
  return (
    <div>
      <h3>ReceicedEvent</h3>
      <div className="eventCardContainer">
        <div className="eventCardImgBox">
          <img
            className="eventCardImg"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBwaHBwaGhwaHhweHBocHBwcGhocIS4lIR4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhJCE0NDQ0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0NDQ2NDQ0NDQ0NDQ0NP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAECAwUGBwj/xABCEAABAwIEAgYJAgQFAgcAAAABAAIRAyEEEjFBUWEFInGBkaEGExQyUrHB0fBCkmJy4fEHFSNTorLSFjNDVIKTwv/EABkBAAMBAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEBAQACAwEAAgMAAAAAAAABEQISIQMxUUETYSKBkf/aAAwDAQACEQMRAD8A42VNrd1FwCTHfn9VtKzw5YTqercAagcz2wOxCV6Nzw3+qLfcawN/6KTKQyEWAb+aqqJ6YTmlpWh0XVyvHB3VPfp5psRRkRvsg6BMkTH0UKjrHBODLI4SCqMNjWPaJcGu3BMeE7KbarASA9p394I5vtPUYuNGV54EfnyQbRcrR6ScyxDmzcWI7fztWZ64TxVUSE8bmYF1UysNrJ3VibR9VX6s8CkabgkyRcEg8QYPiEmU3K1tMnUJKgnD9L4hghleq0cA933V/tT6nWqPc92kuOYwNBJQT6PYLq+lTI0M8oKjOZdw9uJObfknfy/uiWUsw3B/Nk78OqnUTYDDIPbZU40aAcFfXe0W1VTr33VQgYpnVP6lGBw3Ctaxh0ta/aqkKs11MJiAtT2Vp0cD27dqY4ESLg/nNGDWZlCcMC0f8uvccrGflKY4BwMQZ7PojC0GzCk3hWDBFHYaiWakkHY7LQZXaNWef9E/EvJh+xD8BSXQ+2M+DzCSfjBoesybhCwUcx9lTUZdYc1rYpUmxOYnTSYgc0iPz6pxz2WiEa4B6wBg2E243HbcXWbi6OUhw3WzTcXNIyiOJ17hw0ueCrxNAOaRGokdouPMEd6mw2aynI/NkM+iAdB+aorBDUbm/hdSxTIE8PkgA3NgWVzm20VJeLXRJCDxFtPn4KwUh8RQxxAFrqHtZ2HnKn2v0NFNvPxTlrRrbms5+JceS2vR7o9ldrw+SQ4QQTN47vJF2fY2X6D0OsQGjMSYEbnYBesdA/4eMLGvrvOZzQ7KyOrmEwXEGT2ALj+jqIp44sa2G+qGUCLCBe/Np8V3fpD0s+g2iGPcAaTZg2kWWPd2+zn+mrh/QfBMv6ou/me75AgLy/8AxJwlOjiSyk0MaGNOUExJFyt53phXj3zHb8lwPpL0m+tXe97i42EnhARzx7mTCt/WaAiQ1BMfLh2rSkfDPfddMZqvVT5lJ1KAiWPbxI7RPyVxw/VEOadd48k9GAGMIVgRnqCdgewhMaBjQ+Eo8k4HLOxSFPzMq8UzvZIMT0YoLncSph7tfmrS3imLE9LEPaHcfIJJ/VpJ6MqU7H8Km64TVb5XD9Q89R9U7CuZsplRanqMuo6LSVC0PdIAIAm55ckbkgcb27HCR/yHms7NyladN5LJMaEgDaLi/GxToYFWnlquEwAfIw7wuiqrZkRMgj88U/TbIqNI3b/0m3kR4KbLgb8/L7KacYj6g3b8la2u07qjFNh7hzPzQ4ama6rVboBPP6hVJgnKaUgtToXpT1GY5M5dH6sot3HkswBXNYlZ/Dla59I3+0Cu1jGkMDMpJe2BvtdEdNeleIxIYH5BkblGRsW5ySsNrE7mR+cUvDk9p3Yqof1u8Y+Sode5JnifuVYq3PhNJ6TOsO2VsUwCAbjzCyKb7jtW1gIBE3Bs4EbbkHjunoQFAn3SD5K1uHcNinr4Ute5pE5XEdu0+SNwWHIa8ibMkbb3Pbr5JaeAW8wRt9lPMRoT4p879ZPkfmE4rHgPAIImuMan5qYeeXgpMqT+keYVrGtcJy9t0AOXE7DwSzDceEq57WDZ3dB+ah1bdY94+xRpIS34T4lJSyM+I/t/qkjQqpGaJ/hd5WP1Kamq8K+GPH57qkwqMWVXVVKyqosP4FUKmc9a2FgsZDXASLu3JJBgcLrIa634VsYLFZ2NblIyZRJ0PWECNZTJmdOjqsMCfu1p+6hhnEsbPCN+IRHpE2GMA+LfhlP54KnDMhg17+0WSpxj9IN67u75BBwt93Rj6lXKwB7nRIH6bAAuPBdFh/QekA01Hvc79TWwGuPhmA71XMtLqyOCw+Ge8wxpceDQT8l0vR3oXWe0OeQwEGx94cJB1XedH4FlJuWmwMby37SUYDxWs5jO9VxrfQcB7SHZmaOBOU6ayOfYisT6EUy0BjyCDN4kggDvgie8rqwYUgUXnkp1057D+iDC3KSLHMZJ0Ga1v5tOzgsTpr0XazIW+sJNjDJBO0HZd61ydz0vCU/Ox5nifRd7Gh0OdrLR5XAQHsLRYsIdzzA+BK9Z1VTsKwzLGmbaX8VN+O/pz5P15aMPGjA3sY23fqrjhyHZdDsdjwMrtMT6JU3Olj3M/hJJB7DNlaz0WLwA54bl/UJNpmPndZXeftpMrFxnRznhr8sOc1rpaYzOyw9pmwObfmi8BgnNoPc5rtA3K4XudHeBPeF0OCwracUruYbSZNyT1hsO7ZFVMLlbkFyLmdz/AGssr8kXOXn+LAaA3KIA8Zufn5IRrGx7p8fut70kwYYAWzBhwJ4GZb3ALAA7Vpz1sT1ziWRu2by8kzMumY9kKIJTNPJVpYtbbcHxH0Uck7t8R9U4aDJHD8CjA1RoxL1R4j97UylCSNGMzDGGO5/ZXMF1UBDQN1Okng09ZUNftPFTrOVTQNkGIpAu5lb/AEZR6gzDLfe03B0C56m8NN4nadAV0eEBDAXHM5s5rE9aLNHMWnnZJIbpenTAYHAP196oKYsBNiJReEwLHNbFMAQDLTmH3Pgj6vQ3rYc+Kb9dMxM6lzJtMA6hauG6MYwak9tk5NFuAug8C2mHlojMZ/VryzaBaA4q1xtAQ7gtZ6Z26taZ3+ilCGc6E4ryp81TkTmTtchg9SFRPyLxESmlU+sUhUS8z8FrXogIUPVrHqp1Km8WJu4hbmExFFwDcjSYvJuT3rHAnRVsfFlPfM6mU+esdY2mzLPqm24Buyg3DscCCwTbUQfFZGC6QczmI0Wo3FhwGW8iCuTv4ry356lCdI+jFKs3KXPbGkZT/wBQPFc/X/w9cB/p1Wnk9hHmCfku6oAxfdWESsvWej2vLanoJiGiA1j40yv8usAs2v6KYimCX03Bs69Ui54tJ4r2YKL2A6gHtEqv+U/o2fjw5vQ9QAnI+JN8jo77R5oZ+DLRBIHbA358l701oAgCByso1KckTpwIBB8VXl1J9j1+Pnz2Wp/D4j7pL3/2Sn8Df2hJT59j0+c33Pl91NqrY1Te5drKIPGYwoQGyAZOhP0Cd1Tbb81UadNzjDQSdYFypUI6PZmfaCRcDmNPOF3HR+DLQ0GS4NjiL3JjcyBfwQXov0MA0VHt6zhNxtqCeGoEdq6eo4MFtT+Spn/KlfUNSpADSPqeJTVnp2PtKorO2Wk9M6i90BUFSeVQ+pCfVHMO8qtzllY/p2nTdlc6TuGguI7YsFXhumGPMMM9tj2KGsjaNXdIVp0QrHyLKF4iVO1Ugs14MK2nWWZRYZuiZhT7ORosqIhj1zb+l6bHQ57R3hamGxIIBBDgdxceKc0dctqk9SqjdC0ngolj1rz0w659pUnIzDVcpBQIsSrWuTt2YWY6zCVg5oIV4XO9H4vIeRW0zEAxfXbdcXfF5v8ApvzfJe9pOhhSVJrt4gXIuYuNR4JPqgRfXmFnsPE31A2JOpgcyp5kJUrtLsuZkR1gXCeVlP17SBlc0n+bx0Tl2+hi71g4pJs44jxSVexj5wbYKtz7JPeqHvXbWMOSul9Eujg93rHAn3gxuxy5A4nYiXwOYPBc3RgzJFhPbfT84L0v0ewbqVFjHQHuDnZfhDjmg/xa988Fl31kxfMatDTaANtzwHIIPEOlwA1+QRmIcGM7AhKTdzq4x9UceoXSbnRA4BBl8knYW7VZiakAlCYWrmb2EhaxFgh4WR0zVe2m8s9+DEajmOa03OVD6YOqL7Pl5m+pYRe2upk6ydytDohwe8uytYAAOoCBrvzXQV+haWecjY4fSyMw2FbHVAgcZt2BCtSwrhrOq0GU5AssnpXHCgyYl3yQTfSJwbmnqxP9lOKdK6mAhsTQlpveOz5obovphtVodpfKZ2J07lrPppWCWx53i8IWPcSxz25jpnFibEvDY02V3QuPcyo0sHUecrmbETrHxCdd12WIwLKgLXDXe3z+6owHo9Tpuz3ceJv4J/wNqgbSEc24lZ7ARoim1BB567wiJqdF+ae8eBVwdZZuFrCXQZh5BPhK0GhOFV9N/ki6dcjRZjXwZ/OYV9J6PV9UswJ07hnPBcxzyW3IB6wnds9q4XEdJtY/36josWnbl+FekYgDqvuC3cQLHY20XJ+k/RlFp9Y1k+s0FsszLrRY7zN1z3jmX6bTq2fbMw3TbHj4T4XidZ+anTxrnQQ4iJvczJ1I1BF1nBkjRjTPwgyI4a2jinOIAsJPYb+doVePP4W1se11Pjd+dydYWZ3F/iE6WT8L2wnPVcqBKeZut0NHoLCCrXZTd7pMv/laC93iGkd69XwYzf6mmYCBwsLfnFeXdFvFD/Vd78EME7OaQbDUkHfRek9BYsVKIIIMQCAQYIaC5pI307lz/Lfer5+j44997Didgo5Lng0QO3cq51OXCdpPfChUOUHkPMlPjrReWZiqk+KzujanXc2dpHiZ+iIqP6x7J/PJBYS1Ycw4Hxn7eK3iGs4qtwKtka7DdBPxWYkN0Gp4/wBEyh3id1dTIAWPisY4yGiw0nQn7fZGdHPEQfeiTx4INhelcgwDY8h81zrKgjKZyxC7bpek14IdHfe+0Lj34YZyNhpwQptei1JxLmzI4RBN+M6gbLtKQtHBc50ExjBAgEmR2810LqgAk/nglQbMQbeHHsV9KqHcjw/N0HUqiJsQhXYtpNjrvPzS0sbEqTnGEFSrh4AcJix4g8Z4I9jOqRNjoiwayeh6s5zMy8m/Zp5LoKbpC53oqiWF7Xah7vpELewzuqEQWI1X5XcnfPir6D0JjtfPukg/nJTw75Hl4KdynmxrUyCIOhsewrlfSRxZhnsIJcyqA3XR0GRHInwXS4Z94XK/4gVHAshxAN7WuLSY1tHYp6u0czHElxPPvPy0T08QWiPwJPZOhuot4H5AlPBqftfIfnenVWVvxDxCSeQaz2gk2uUVSIZexd4hv3KlToa6AASTpbmfomptbaDPfPlxTtSiaxJk3cfywW50D047DZxBcHj3eDho63KQb8FnMpSYH9VcxkEQ0k3iQSOZNlHUnUxUue3pWC6ToVXDI9pJbMTfWDI1BBi3NR6RsXBcP0acjg8dUAzI6vbddyys2sy8B527lh43i7/F7Oo52q7rnvHyCrwrYqt5yPEfdaeJ6OM2jXjyWdicK4aiPJdE7lnpPi0cVS6p4afcrl8fiy3qgCSRbeP4vsugp48OGR4jn3R3cVi9I9HAFpEkF2w31+SfkXizGVC67iYn932ErX6OrkZ3OETfnAmyzKgDXFscY4aW81fg6nVvzk8pR5DEMc+o89X6W8VkVMLUBncCfziuh9bMBsAG5OkDgmrV2WAiN1U6gwFgHPFyNLmBsumoVZb3eKx8PWA0H5zRjaobbbUR8lN60YIFQXBEyNtVlYnDyZYbHVpBaZHLuWiKwcJ8VEMJuLhLTw3RRLoI1txuPweS6eoIZ1jo3XhAlZfRWHDbncujX9Rm/n4pumcTYMB3zO7BMBHkMVYJ5cXTc2k8zdbeFMNb+blc/gQWwd3OJ+a2GPnKBsP7o0YJxzesw8RHj/dC0AQSPyxCOrjM0GPdI8FFjIJMWglZdd4uRfg7GeWvBcZ6bdKF78jMrmMEOkgc8wB21v2LX6X6Rc/qMMMHvHR1vppwXPtw7bOjS8jeeM8k+Zb7pdWRjA0RlIY9zuGciPCLK9tWl/svm5tfmTZ3Io99IkxkBJPBo+nmSmZQAMwdI+4has9ZvtFD/bq+A/7ky1fUsSS9jR2AwYY/MwNta4BjebmAeaPxFBlQhxyOOWDETbnuFUKR4XNzlNhNu+2ylhm1A45ywsuAA1xJ4FsuNuIU3qWnmQPUwTGHMGtB5C/ynwUWPa61yOQPy70e9+oLe8QLRAyi0Kp7nOkFhNoBa6+/vR3JyhSMMAbtPjM9oKupy2C2WkaWAi+0DkkJyjqCRraSByM2PernssPe7ZJ7LCwSvsQZh+kGPAD8s8Rx4kHTVEHBukkdZuxsQEJSb7okwBF40H1W5RByG2yyvMl9LlczisGAZHgqWUwAWnQ9y261ILPxFEFXzzSvUc5j6ZBuILjAG+W8ad3igWscSbQC0AC8fmviunexxG1rAwJHYUC4OHvXCvxpbGMcK82vA2lM/COBI4LXcWzqJTVGbIwM9lLSxlE0Jc8jbL8t/NGspXmERQFyUvZqMFRkaQDcc5+RlHUqUagjkrcPYXVeJqFLKAnSGMeIayPoFSxsnz21RDWCDOvmisJgy9vVAkdyDRw9I2OsI/DUzN1P2VrB1zEbAjVOcdbqADtudbmNPFRevwYKrVWUxDjroNyOxY+OxRewAHJewBd1uEmLKvEVCdS4naTOvYVUKb9WgZhfaP8AkJ0JRzJ90eV+oopNm7tdydSdJBdHipuOYutJAvPDS3ip1qj2nK7bnH/HSPyyqbVdIORpHhGosQDrzC1ntCeRoEg8oIkDhoq3UWzLpmP0iGkcyTY84RNGJJaHNBOx/wD0Isoig4TeRcicw12PZxKNLGf1P4P/ALHfdOj/AFj/AIG/vSRox37egcPluwk3J67rDxVP/huhMta4N2EyJM3veJ4FbxpAgNOw2kckNRpNZOUPi9iXHuaCfkuG9dTPbb05qv0HTIkVwA0Xlo7DPioYXoen1Qa2ZxIIywBA1FpvourytsYIB427iCqdbgm0lpIi51AsBtuovfX6qZ+OXx/RTBUyMNQH4SAcw4gtvHMhSp9A1M7WuhgdpLpNtYgRPIrrmkTJBaSOAM9pG3anLmgDrd5g72Vzrr+0rn45ql6PZJeaubiQLfM8lfWDQIDpWr0k8NbA3O32XP16q3+Hnrr3ajrrIor3QFRiKqPlUOuumc4ytBerVNelYopwhVvEphlexgm91V7NB1Wsad+xN6oFAZzaZ1lF4dtp3Vr2C4hTpU4Rh6Zw4KsgkwjGU1a1gGyVhxRhcKDzn8ut7o+gBEDw1QdFo2+UI2gSNFPjp24sr9DuebODZmSWF0DjEhZ/+WtY0Z3uL8xgxla4CTAbBJmNvFdFSGcCZ11n5g2VWKxLQADSe90Ee4HluwJHDey835euubebcac8+TMfg3Op5gyiQXECGZOIzteCdL2I2Q2B6Oe4Ou12YHIc1pES4EDS2i2MBiKhtUomRYQA0kcchtrzC1aLmOaWiWZdhALdtNtClx16yX/1WTn+OQf0RiWyS1roMS1wsDtf8uhsZgKrAS6meFxsTsRx7V2/tLLNa5oJuM2h04kbkaKwyGgvIJHvZWwDOggzyW0+SybKV/3Hm7GO2BgaAmPKdddlT6twMBhdxs4Hn9eC9SY5sfcfdVVHCQDIg6CBPAAz5Kr81zUyR5f7O/8A2a3n9069Uzfwu8R906P81GQMcS5vWcG5eIMb3lt7iOKua9r2h14N9weNxsoUqLWwMt+cT2kz5qYqEGC0xrppFrrnm/VVcJ72tiTHb+aqDKg93rH+LKWj90JCp1iDcTYwSB2nQH+ivyAnjH4ZTl36JTTcANXOjUyCRvHNPRdmaHBpGtnCDzseKvAHZ5KD3WiCedlefoYuPrAkx5rFrOutTGCCVmP1Xb8Mk5Zd3aocVEsnRXNpTroqata8C2wA4LXyROdVPpRqfBD1C0Xk8NE7quyrc+0KfdXi4PZMb8Dr/ZWOe34QhQwC++53/AhcS57vcdBmRwPI8lWDGh6tuomPHy1U3UrZmnMPl2hZ2ExRLZdIIsQeK0GVBBe2JHvDiOKBidFqIYxDUarHgPYbGxHAolhQBFNquYYVLSmxNXIxzzo1pd4ILGnh8XkvMcVQ3p+lMvA6oPWyieWU7QuE6U6dLABqajc0nQdvcdFR0r0i3IxjHBwAkkaGY1/abc1j38fPXutOLnqvTOj+l21XHK4NMaPuCRuDI8FpiIvJMgTlmx5/Dz2XlnQnpCxtF2YjMx8gbuaSJy87nwC7v0dxzapLgS7qy2CRIPEcYXN38E59xpbrWo1c5cRlLQ6zhedJjcEHhIKJLojrancEzyB2UW0eDjbTTQ7Hl5pNoZYgkwf1EussZsK4vDhPPdDva4EkZXAXyxBnbrT2bKGIwDHkk5gTEkPc2Y0kA7K2rOhu3vGnMJ2zPZSBP8xf/wC3qeLfukl7W/4meDkll/2rHHu9J8R8Y/Y37KJ9IsRmzZ79gA0jTuWGXJF69b/Dx+I2tpvpHiBo6NbZWxfuTH0hxBIOe45N+yxg5IlKfDxP4e1tP9JMQf8A1COxrfso1fSHEEf+YfBo+QWMSmKf+Lj8G0bU6VrGZe7y+yqdj6nxny+yGTK5zIQh+PqaZ3R3Kn2p/wAbvFQhRARhYl693xFO6u7j+c09Oo5vumDyUKj3HUz2/dAxN2If8RUfWu4pgEoQMTbVMbeATsqOGhjsVcKQTGJse5ohpjst8lL1z/id+4/dVFOCka/17vjd+4quq97gQXuINiC4kHxKjmTgpkAr9FMfqJjRUN6BZvotZIBBs2n0KwfpB8Vq4Fnq5yS2eDndijCcIyX7LRvtj9c7p/mP3TjpCp8b/wBzvugbpBpU+HH4Jb+jX4551e4//I/dL2t9uu79xQYYkWJ+HH4e39G+1P8Ajd4n7pIPL2pJ/wCPj8Lyv6RUQE7kpQZk8pk5KZIlIp0yBpiUw7lNNCBqISClCRSNApFqlKYplpmhPCZx5wkgaUJwEpTkowaYBPCQTpkQCk0KIUkAoTpBykEAyclNKQQRwU5cop2lAOSlKRCYjmgJJJpSQEAnGiSSSkUxSSQRkgkkgRMaJ3JJICIUT9UkkBBO5OkgBsTsrG7dg+SSSKEippJJgw3UkkkAmqSSSCIKSSSAiVNqZJASKikkkCTlMknQSSSSCf/Z"
            alt="eventImg"
          />
        </div>
        <div className="eventCardRightBox">
          <h4>마.. 생일축하한다는 예시다 이거...</h4>
          <h5>@jaerong._</h5>
          <p>2023.02.07 (다솜이 죽어가는 날)</p>
        </div>
        <Link to="/gift/intro">
          <button type="button">기프트팡 인트로</button>
        </Link>
        <Link to="/gift">
          <button type="button">이벤트 상세보기</button>
        </Link>
      </div>
    </div>
  );
}
