# graphql

# 쉬운 서버 설정!

- npm install graphql-yaga
- /users/ GET 으로 원하는 값만 리턴 하지 못하는 단점이 있다. (over-fetching)
- 그러나 그래프 큐엘을 사용한다면 필요한 정보만을 받아 올 수있다.
- 하나의 프로그램을 위해서 여러번의 rest-api 콜을 요청하는 것이다. (under-fetching)

## 하나의 end-point를 가지고 원하는 데이터를 받아 올 수 있다.

<pre>
<code>
query{
  feed{
    comments
    likeNumber
  }
  notifications{
    isRead
  }
  user{
    username
    profilePic
  }
}

//응답
{
  feed{
    comments:1,
    likeNumber:22
  }
  notifications{
    isRead:true
  }
  user{
    username:'gi'
    profilePic:'httpL~~.jpe'
  }
}

</code>
</pre>


# 2 스키마 쿼리 / 리솔버
- 쿼리 : 데이터를 받을때
- 뮤테이션 : 정보를 바꾸는 작업
