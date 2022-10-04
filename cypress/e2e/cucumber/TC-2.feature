Feature: Telnyx UI

  Scenario: Go to Network Page 
    # Given I open the "Home" web-page
    When I click on Network element in the header
    Then I see url: "https://telnyx.com/solutions/global-ip-network"