from collections import Counter

def findMaximumPackages(cost: list[int]) -> int:
    """
    Finds the maximum number of packages that can be created with equal total costs.
    Each package can contain at most 2 items.
    """
    cost_frequency = Counter(cost)
    sum_counts = Counter()
    costs = list(cost_frequency.keys())

    # Single item packages
    for c in cost_frequency:
        sum_counts[c] += cost_frequency[c]

    # Two items packages
    for i, c in enumerate(costs):
        for j in range(i, len(costs)):
            d = costs[j]
            if c == d:
                num_pairs = cost_frequency[c] // 2
            else:
                num_pairs = min(cost_frequency[c], cost_frequency[d])
            sum_cd = c + d
            sum_counts[sum_cd] += num_pairs

    # Return the maximum number of packages possible with equal cost
    return max(sum_counts.values())

# Test cases
example1 = [2, 1, 3]
example2 = [4, 5, 10, 3, 1, 2, 2, 2, 3]
example3 = [1, 1, 2, 2, 1, 4]

print(findMaximumPackages(example1))  # Expected: 2
print(findMaximumPackages(example2))  # Expected: 4
print(findMaximumPackages(example3))  # Expected: 3
