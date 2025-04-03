module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2, // 에러 레벨 (0 = off, 1 = warning, 2 = error)
      'always', // 항상 적용
      [
        'feat', // 새로운 기능 추가
        'fix', // 버그 수정
        'docs', // 문서 변경 (README 등)
        'style', // 코드 스타일 변경 (포맷팅, 세미콜론 등)
        'refactor', // 리팩토링 (기능 변경 X)
        'perf', // 성능 개선
        'test', // 테스트 코드 추가/수정
        'build', // 빌드 관련 변경
        'ci', // CI/CD 관련 변경
        'chore', // 기타 변경 사항 (패키지 업데이트 등)
        'revert', // 이전 커밋 되돌리기
      ],
    ],
  },
};
